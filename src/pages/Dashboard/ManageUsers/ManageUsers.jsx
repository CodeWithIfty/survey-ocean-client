import { useState } from "react";
import Heading from "../../../components/Surveys/Heading";
import useAllUsers from "../../../hooks/UseAllUsers";
import { deleteUser, updateUserRole } from "../../../api/Users";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const [filteredRole, setFilteredRole] = useState("");
  const { users, refetch } = useAllUsers();
  const [selectedRole, setSelectedRole] = useState("");

  const handleUpdateRole = async (id) => {
    const toastId = toast.loading("Loading...");
    try {
      if (id && selectedRole) {
        const role = {
          userId: id,
          newRole: selectedRole, // New role to assign
        };
        const res = await updateUserRole(role);
        console.log(res);
        toast.success("Successfully Updated!", { id: toastId });
        refetch();
      }
    } catch (err) {
      toast.error("Failed!", { id: toastId });
      console.log(err);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const toastId = toast.loading("Loading...");
      const data = await deleteUser(id);
      toast.success("Successfully Deleted!", { id: toastId });
      refetch();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredUsers = users?.filter((user) => {
    if (filteredRole === "") {
      return true;
    } else {
      return user?.user_role === filteredRole;
    }
  });

  return (
    <div className="p-5">
      <Heading title={"Manage Users"} />
      <div className="relative h-screen overflow-auto  border sm:rounded-lg p-5">
        <table className="w-full text-sm text-left rtl:text-right  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <p>#SL</p>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                <select
                  name=""
                  id=""
                  value={filteredRole} // Control the value by the state
                  onChange={(e) => setFilteredRole(e.target.value)}
                >
                  <option value="">Sort by role</option>
                  <option value="surveyor">surveyor</option>
                  <option value="admin">admin</option>
                  <option value="user">user</option>
                  <option value="pro-user">pro-user</option>
                </select>
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <p>{index + 1}</p>
                  </div>
                </td>

                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.user_photo}
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {user?.user_name}
                    </div>
                    <div className="font-normal text-gray-500">
                      {user?.user_email}
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4">{user?.user_role}</td>

                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <select
                      name=""
                      id=""
                      className="px-2 py-1 bg-secondary text-gray-700 font-bold"
                      onChange={(e) => setSelectedRole(e.target.value)}
                    >
                      <option value="">Select role</option>
                      <option value="admin">admin</option>
                      <option value="surveyor">surveyor</option>
                    </select>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => handleUpdateRole(user?._id)}
                    className={`${
                      selectedRole
                        ? " bg-primary text-white"
                        : " bg-gray text-gray-600"
                    } font-medium  px-2 py-1 rounded-lg  `}
                  >
                    update
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user?._id)}
                    className="font-medium bg-red-500 px-2 py-1 rounded-lg text-white ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
