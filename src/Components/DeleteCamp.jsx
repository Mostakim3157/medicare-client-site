import { FaTrash } from "react-icons/fa";

const DeleteCamp = ({id}) => {
    console.log(id);
    return (
        <div>
             <button className="text-red-500">
                    <FaTrash></FaTrash>
                  </button>
        </div>
    );
};

export default DeleteCamp;