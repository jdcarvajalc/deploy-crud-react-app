import { DataGrid } from "@mui/x-data-grid";
import ActionButtons from "../ActionButtons/ActionButtons";
import { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Swal from "sweetalert2";

const Table = (props) => {
    const {
        tableBasicColumns,
        tableType,
        UpdateForm,
        updateFormTitle,
        ViewCard,
    } = props;

    const [data, setData] = useState([]); // for fetching data
    const collectionType = tableType;

    // Hook for getting documents from Firestore Collection
    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try {
                const querySnapshot = await getDocs(
                    collection(db, collectionType)
                );
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
            } catch (error) {
                console.log(error);
            } finally {
                //  Always executed
                // Swal alert close when the data is loaded
                Swal.close();
            }
        };
        Swal.fire({
            title: "Actualizando datos",
            didOpen: () => {
                Swal.showLoading();
            },
        });
        fetchData();
    }, [collectionType]);

    const handleDelete = async (id) => {
        Swal.fire({
            icon: "warning",
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminarlo",
            cancelButtonText: "No, cancelar",
            confirmButtonColor: "#0A8B5E",
            cancelButtonColor: "#DE3C14",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteDoc(doc(db, collectionType, id));
                    setData(data.filter((item) => item.id !== id));

                    Swal.fire({
                        icon: "success",
                        title: "¡Elemento eliminado!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Ha ocurrido un error al intentar eliminar el elemento.",
                    });
                }
            }
        });
    };

    const columns = [
        ...tableBasicColumns,
        {
            field: "actions",
            headerName: "Acciones",
            flex: 1,
            renderCell: (params) => {
                // find the selected element in the array of rows by comparing id´s
                const selectedElement = data.find(
                    (element) => element.id === params.row.id
                );

                switch (tableType) {
                    case "users":
                        return (
                            <ActionButtons
                                type={tableType}
                                selectedElement={selectedElement}
                                ViewCard={ViewCard}
                                UpdateForm={UpdateForm}
                                updateFormTitle={updateFormTitle}
                                handleDelete={() =>
                                    handleDelete(selectedElement.id)
                                }
                            />
                        );

                    default:
                        return (
                            <ActionButtons
                                type={tableType}
                                selectedElement={selectedElement}
                                UpdateForm={UpdateForm}
                                updateFormTitle={updateFormTitle}
                                handleDelete={() =>
                                    handleDelete(selectedElement.id)
                                }
                            />
                        );
                }
            },
        },
    ];

    return (
        <div
            style={{
                background: "white",
            }}
        >
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
};

export default Table;
