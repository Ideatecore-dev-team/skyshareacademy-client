import React, { useEffect, useState } from "react";
import skyshareApi from "../../utilities/skyshareApi";
import { Link } from "react-router-dom";
import Edit from "@public/images/mascot-icons/Edit.png";
import ArrowRight from "@public/images/mascot-icons/Arrow - Right 3.png";
import IconAddUser from "@public/images/mascot-icons/Add User.png";
import { MdOutlinePeople } from "react-icons/md";

function CmsNavCard() {
  const [dataAdmin, setDataAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataadmin = async () => {
      try {
        const response = await skyshareApi.get("/admin/info");
        setDataAdmin(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getDataadmin();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const menuItems = [
    {
      id: "kelola-akun",
      label: "Kelola Akun",
      to: "/cms/kelolaakun",
      icon: IconAddUser,
      condition: dataAdmin && dataAdmin.role !== "admin",
    },
    {
      id: "talent-academy",
      label: "Talent Academy",
      to: "/cms/talentacademy",
      icon: ArrowRight,
      condition: true,
    },
    {
      id: "mentor-academy",
      label: "Mentor Academy",
      to: "/cms/mentoracademy",
      icon: ArrowRight,
      condition: true,
    },
    {
      id: "parents-academy",
      label: "Parents Academy",
      to: "/cms/parentsacademy",
      icon: ArrowRight,
      condition: true,
    },
    {
      id: "article",
      label: "Article",
      to: "/cms/article",
      icon: Edit,
      condition: true,
    },
  ];

  return (
    <div className="py-4 px-3 w-72 h-auto flex justify-center items-center rounded-xl bg-neutral-white">
      <ul>
        {menuItems.map((menu) => {
          if (menu.condition) {
            // Cek apakah icon adalah komponen React atau string (URL gambar)
            const isReactIcon = React.isValidElement(menu.icon);
            
            const iconComponent = isReactIcon ? (
              menu.icon
            ) : (
              <img className="w-6" src={menu.icon} alt={menu.label} />
            );

            return (
              <li
                key={menu.id}
                className="py-4 w-64 px-4 hover:bg-background rounded-xl"
              >
                <Link className="flex gap-4 items-center" to={menu.to}>
                  {iconComponent}
                  <p className="text-base">{menu.label}</p>
                </Link>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default CmsNavCard;