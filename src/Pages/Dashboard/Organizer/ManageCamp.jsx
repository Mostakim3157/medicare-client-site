// src/pages/ManageCamp/ManageCamp.js
import  { useState } from 'react';
import Title from "../../../Components/Title";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Pagination from '../../../Components/Pagination';
// import { Pagination } from 'swiper/modules';
// import Pagination from "../../components/Pagination";

const ManageCamp = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const { data: camp = [], refetch } = useQuery({
    queryKey: ["allCamp"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allCamp");
      return res.data;
    },
  });

  const totalPages = Math.ceil(camp.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const selectedRows = camp.slice(startIndex, startIndex + rowsPerPage);

  const handleDelete = (_id) => {
    if (user?.email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://b9-a12-server-lovat.vercel.app/allCamp/${_id}`, {
            method: "DELETE",
            credentials: "include",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your camp has been deleted.", "success");
                refetch();
              }
            });
        }
      });
    } else {
      toast.error("You have to login first.");
    }
  };

  return (
    <div>
      <Title title={"Manage camps"}></Title>

      <div>
        <div className="overflow-x-auto">
          <table className="table border">
            <thead>
              <tr>
                <th>Camp Name</th>
                <th>Date & Time</th>
                <th>Location</th>
                <th>Healthcare Professional</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {selectedRows.map((cam, id) => (
                <tr key={id}>
                  <td>{cam.campName}</td>
                  <td>{cam.dateTime}</td>
                  <td>{cam.location}</td>
                  <td>{cam.healthcareProfessionalName}</td>
                  <td>
                    <Link to={`/update/${cam._id}`}>
                      <FaEdit className="text-green-500 text-xl" />
                    </Link>
                  </td>
                  <td>
                    <MdDeleteOutline
                      className="text-red-600 text-xl"
                      onClick={() => handleDelete(cam._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div >
        <div className='flex justify-center mt-4 '>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        </div>
      </div>
    </div>
  );
};

export default ManageCamp;
