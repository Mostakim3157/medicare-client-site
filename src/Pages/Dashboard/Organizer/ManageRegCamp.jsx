import { MdCancel } from "react-icons/md";
import Title from "../../../Components/Title";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { IoMdDoneAll } from "react-icons/io";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../../../Components/Pagination";

const ManageRegCamp = () => {
  const { user } = useAuth();
  // const [camp, setCamp] = useState();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const { data: camp = [], refetch } = useQuery({
    queryKey: ["allJoinedCamp"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allJoinedCamp");
      return res.data;
    },
  });

  

  const totalPages = Math.ceil(camp.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const selectedRows = camp.slice(startIndex, startIndex + rowsPerPage);



  const handleDelete = (_id) => {
    console.log(_id);

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
          fetch(
            `https://b9-a12-server-lovat.vercel.app/allJoinedCamp/${_id}`,
            {
              method: "DELETE",
            },
            { credentials: "include" }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
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
    <section>
      <Title title={"Manage Registered camps"}></Title>

      <div>
        <div className="overflow-x-auto">
          <table className="table border">
            {/* head */}
            <thead>
              <tr>
                <th>Participant Name </th>
                <th>Camp Name</th>
                <th>Camp Fees</th>
                <th>Payment status</th>
                <th>Confirmation Status</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {selectedRows?.map((cam, id) => (
                <tr key={id}>
                  <td>{cam.participantName}</td>
                  <td>{cam.campName}</td>
                  <td>{cam.campFees}</td>
                  <td>{cam.paymentStatus}</td>
                  <td>{cam.confirmation}</td>

                  {cam.paymentStatus === "paid" ? (
                    <>
                      <td>
                        <IoMdDoneAll className="text-xl text-green-500" />
                      </td>
                    </>
                  ) : (
                    <>
                      <td>
                        <button onClick={() => handleDelete(cam._id)}>
                          <MdCancel className="text-xl text-red-500" />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-center mt-4 '>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        </div>
      </div>
    </section>
  );
};

export default ManageRegCamp;
