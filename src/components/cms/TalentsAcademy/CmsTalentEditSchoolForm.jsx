import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import skyshareApi from "../../../utilities/skyshareApi";
import "../Hero2.css";
import CmsNavCard from "../CmsNavCard";

import Modal from "../../modals/modals"; 

import Edit1 from "../../../../public/images/mascot-icons/Edit Square.png";
import Delete from "../../../../public/images/mascot-icons/Delete.png";
import Add from "../../../../public/images/mascot-icons/Plus.png";
import Group from "../../../../public/images/mascot-icons/3 User.png";
import Chain from "../../../../public/images/mascot-icons/Link.png";
import ArrowLeft from "../../../../public/images/mascot-icons/Arrow - Down 3.png";
import Mascot from "../../../../public/images/mascot-icons/pose=2.webp";
import Mascot1 from "../../../../public/images/mascot-icons/pose=8.webp";
import Mascot2 from "../../../../public/images/mascot-icons/pose=1.webp";
import Ceklist from "../../../../public/images/mascot-icons/Tick Square.png";
import Coution from "../../../../public/images/mascot-icons/Info Square.png";

function CmsTalentEditSchoolForm() {
  const [schoolForm, setSchoolForm] = useState({});
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [dataGroups, setDataGroups] = useState([]);
  const [dataSchool, setDataSchool] = useState({});
  const Navigate = useNavigate();
  const { id } = useParams();

  // --- HANYA SATU STATE UNTUK SEMUA MODAL ---
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null, // 'delete', 'saveSuccess', 'cancel', 'error', 'loading'
    props: {}, // Untuk data tambahan seperti pesan error atau ID item
  });

  // --- Effect untuk mengambil data sekolah saat komponen dimuat ---
  useEffect(() => {
    const getDataSchool = async () => {
      try {
        const getDataFromServer = await skyshareApi.get(`/school/${id}`);
        const schools = getDataFromServer.data.data;
        setDataSchool(schools);
        setSchoolForm({
          nama_sekolah: schools.nama_sekolah,
          alamat: schools.alamat,
          embed_map: schools.embed_map,
        });
        setImagePreviewUrl(schools.gambar_logo_sekolah || "");
      } catch (error) {
        console.error("Gagal mengambil data sekolah:", error);
      }
    };
    getDataSchool();
  }, [id]);

  // --- Effect untuk mengambil data grup berdasarkan nama sekolah ---
  useEffect(() => {
    const getDataGroups = async (schoolName) => {
      if (!schoolName) return;
      try {
        const response = await skyshareApi.get("/group");
        const filteredGroups = response.data.data.filter(
          (group) => group.nama_sekolah === schoolName
        );
        setDataGroups(filteredGroups);
      } catch (error) {
        console.error("Gagal mengambil data grup:", error);
      }
    };
    if (dataSchool.nama_sekolah) {
      getDataGroups(dataSchool.nama_sekolah);
    }
  }, [dataSchool]);

  // --- FUNGSI GENERIK UNTUK MEMBUKA & MENUTUP MODAL ---
  const openModal = (type, props = {}) => {
    setModalState({ isOpen: true, type, props });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null, props: {} });
  };

  // --- Handler untuk menyimpan perubahan data sekolah ---
  const handleEditSchool = async () => {
    const formData = new FormData();
    // Append file hanya jika ada file baru yang diupload
    if (schoolForm.gambar_logo_sekolah instanceof File) {
      formData.append("gambar_logo_sekolah", schoolForm.gambar_logo_sekolah);
    }
    formData.append("nama_sekolah", schoolForm.nama_sekolah);
    formData.append("alamat", schoolForm.alamat);
    formData.append("embed_map", schoolForm.embed_map);
    
    openModal('loading', { message: 'Menyimpan perubahan...' });

    try {
      const responseFromServer = await skyshareApi.put(`/school/${id}`, formData);
      if (responseFromServer.data.status === "success") {
        openModal('saveSuccess');
      } else {
        openModal('error', { message: 'Gagal menyimpan data.' });
      }
    } catch (error) {
      console.error("Error saat menyimpan:", error);
      openModal('error', { message: 'Terjadi kesalahan pada server.' });
    }
  };

  // --- Handler untuk menghapus grup ---
  const deleteGroup = async (groupId) => {
    closeModal(); // Tutup modal konfirmasi
    openModal('loading', { message: 'Menghapus grup...' });
    try {
      await skyshareApi.delete(`/group/${groupId}`);
      setDataGroups(dataGroups.filter((group) => group.id !== groupId));
      closeModal(); // Tutup modal loading setelah selesai
    } catch (error) {
      console.error("Error saat menghapus:", error);
      openModal('error', { message: 'Gagal menghapus grup.' });
    }
  };

  // --- Handler untuk perubahan file input ---
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSchoolForm({ ...schoolForm, gambar_logo_sekolah: file });
      setImagePreviewUrl(URL.createObjectURL(file));
    }
  };

  // --- Fungsi navigasi ---
  function handleNavigate(id) {
    Navigate(`/cms/talent/editgroup/${id}`);
  }
  
  // --- Fungsi untuk merender konten modal secara dinamis ---
  const renderModalContent = () => {
    const { type, props } = modalState;

    switch (type) {
      case 'delete':
        return (
          <>
            <div className="flex justify-center">
              <img className="w-40" src={Mascot} alt="Delete Confirmation" />
            </div>
            <h3 className="mb-5 mt-5 headline-3 text-center">Yakin untuk menghapus Group?</h3>
            <div className="flex justify-center gap-4">
              <button onClick={closeModal} className="bg-gray-300 px-4 py-2 w-1/2 rounded-lg">Batal</button>
              <button onClick={() => deleteGroup(props.id)} className="bg-red-500 w-1/2 hover:bg-red-400 text-white px-4 py-2 rounded-lg">Hapus</button>
            </div>
          </>
        );

      case 'saveSuccess':
        return (
          <>
            <div className="flex justify-center">
              <img className="w-40" src={Mascot1} alt="Success" />
            </div>
            <div className="flex gap-1 mt-5 items-center justify-center">
              <img className="w-6 h-6" src={Ceklist} alt="Checklist" />
              <h3 className="headline-3">Berhasil tersimpan</h3>
            </div>
          </>
        );

      case 'cancel':
        return (
          <>
            <div className="flex justify-center">
              <img className="w-40" src={Mascot2} alt="Cancel Confirmation" />
            </div>
            <div className="flex gap-1 mt-5 items-center justify-center">
              <img className="w-6 h-6" src={Coution} alt="Caution" />
              <h3 className="headline-3">Perubahan tidak tersimpan</h3>
            </div>
          </>
        );

      case 'error':
        return (
          <>
            <div className="flex justify-center">
              <img className="w-40" src={Mascot2} alt="Error" />
            </div>
            <div className="flex gap-1 mt-5 items-center justify-center">
              <img className="w-6 h-6" src={Coution} alt="Caution" />
              <h3 className="headline-3 ">{props.message || 'Terjadi kesalahan'}</h3>
            </div>
          </>
        );
      
      case 'loading':
        return (
            <div className="flex flex-col items-center justify-center p-5">
                  <svg className="animate-spin h-8 w-8 text-primary-1 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" ></path>
                </svg>
                <p className="text-primary-1">{props.message || 'Loading...'}</p>
            </div>
        )

      default:
        return null;
    }
  };

  // --- Handler untuk tombol close modal yang memiliki aksi navigasi ---
  const handleCloseAndNavigate = () => {
      closeModal();
      Navigate('/cms/talentacademy');
  }

  return (
    <>
      <div className="bg-background flex flex-col pt-12 items-center self-stretch">
        <div className="content-1 flex gap-4">
          <div>
            <CmsNavCard />
          </div>
          <div className="w-full">
            <div>
              <h1 className="headline-1">Edit School</h1>
              <p className="paragraph">Masukkan data pada field yang tertera</p>
            </div>
            <div className="shadow-md bg-neutral-white mt-10 border-2 border-black rounded-xl pb-5 px-3 w-full">
              <div className="logo-sekolah mt-6">
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <h4 className="font-bold text-base">Upload Logo Sekolah <span className="text-orange-300">*</span></h4>
                </div>
                <div className="bg-neutral-white rounded-xl border-2 border-gray-400 px-6 pt-7 pb-4">
                  <div className="border-2 border-dashed flex justify-center items-center border-gray-400 rounded-xl h-60">
                    {imagePreviewUrl && (
                      <div className="flex justify-center">
                        <img src={imagePreviewUrl} alt="Image Preview" className="rounded-xl border-2 border-gray-400" style={{ maxWidth: "100%", maxHeight: "220px" }} />
                      </div>
                    )}
                  </div>
                  <div className="my-4 bg-primary-1 cursor-pointer hover:bg-primary-2 flex justify-center rounded-xl items-center relative">
                    <input type="file" id="image_heading" accept="image/*" onChange={handleFileChange} className="cursor-pointer absolute w-full h-full opacity-0 z-10" />
                    <div className="flex gap-2 items-center py-4">
                      <p className="cursor-pointer text-white font-bold">Upload File</p>
                      <img className="cursor-pointer w-6 -rotate-90" src={ArrowLeft} alt="" />
                    </div>
                  </div>
                  <div className="flex justify-center pb-3">
                    <h4 className="text-base">Minimal Ukuran <span className="font-bold">(956 x 350px)</span></h4>
                  </div>
                </div>
              </div>

              <div className="join-button mt-6">
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <form className="w-full" action="">
                    <label className="block font-bold mb-1" htmlFor="nama_sekolah">Nama Sekolah <span className="text-red-500">*</span></label>
                    <input id="nama_sekolah" placeholder="Masukkan nama sekolah" value={schoolForm.nama_sekolah || ''} type="text" onChange={(e) => setSchoolForm({ ...schoolForm, nama_sekolah: e.target.value })} className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none" />
                    
                    <label className="block font-bold mt-4 mb-1" htmlFor="alamat_sekolah">Alamat Sekolah <span className="text-red-500">*</span></label>
                    <input id="alamat_sekolah" placeholder="Masukkan alamat sekolah" value={schoolForm.alamat || ''} type="text" onChange={(e) => setSchoolForm({ ...schoolForm, alamat: e.target.value })} className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none" />
                    
                    <label className="block font-bold mt-4 mb-1" htmlFor="embed_map">Masukkan Embed Google Maps (HTML) <span className="text-red-500">*</span></label>
                    <input id="embed_map" value={schoolForm.embed_map || ''} placeholder="Example : https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6197699153263!2d106.71407467533372!3d-6.3135771617850365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e55a184cee4d%3A0xc038909b2253775e!2sSMA%20Negeri%209%20Kota%20Tangerang%20Selatan!5e0!3m2!1sid!2sid!4v1714293197913!5m2!1sid!2sid" type="text" onChange={(e) => setSchoolForm({ ...schoolForm, embed_map: e.target.value })} className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none" />
                  </form>
                </div>

                <div className="daftar-sekolah mt-6">
                  <div className="bg-background flex justify-between rounded-xl mt-5 py-3 px-3">
                    <div className="flex items-center gap-5">
                      <img className="w-6" src={Group} alt="" />
                      <h4 className="headline-4">Daftar Grup di {dataSchool.nama_sekolah}</h4>
                    </div>
                    <div className="bg-primary-1 flex items-center rounded-md px-2 py-2">
                      <Link to="/cms/talent/addgroup" className="bg-primary-1 hover:bg-primary-2"><img className="w-6" src={Add} alt="" /></Link>
                    </div>
                  </div>
                  <div className="bg-neutral-white p-4 overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="pr-4 py-3 text-left">No.</th>
                          <th className="pr-20 py-3 text-left">Nama Grup</th>
                          <th className="pr-20 py-3 text-left">Link Instagram</th>
                          <th className="pr-1 py-3 text-left">Nama Sekolah</th>
                          <th className="pl-16 py-3 text-center">Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataGroups.map((dataGroup, index) => (
                          <tr key={dataGroup.id}>
                            <td className="pl-3 py-4 text-left font-semibold text-sm">{index + 1}</td>
                            <td className="pl-1 py-4 text-left text-sm">{dataGroup.name}</td>
                            <td className="py-4 text-left">
                              <div className="flex items-center text-sm gap-1">
                                <img className="w-6 h-6" src={Chain} alt="" />
                                {dataGroup.link}
                              </div>
                            </td>
                            <td className="pl-1 py-4 text-left text-sm">{dataGroup.nama_sekolah}</td>
                            <td className="pl-16 py-4 text-left flex gap-4 justify-center">
                              <button onClick={() => handleNavigate(dataGroup.id)} className="bg-primary-1 hover:bg-primary-2 px-2 py-2 rounded-lg flex justify-center items-center"><img className="w-5" src={Edit1} alt="" /></button>
                              <button onClick={() => openModal('delete', { id: dataGroup.id })} className="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-lg flex justify-center items-center"><img className="w-5" src={Delete} alt="" /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4 flex gap-5 justify-end">
                  <div className="w-56 py-2 flex">
                    <button type="button" onClick={() => openModal('cancel')} className="bg-gray-300 w-full py-2 rounded-md hover:bg-gray-200 text-black font-bold">Batal</button>
                  </div>
                  <div className="w-56 py-2 flex">
                    <button onClick={(e) => { e.preventDefault(); handleEditSchool(); }} type="submit" className="bg-primary-1 w-full py-2 rounded-md hover:bg-primary-2 text-white font-bold">Simpan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* --- HANYA SATU KOMPONEN MODAL DI SINI UNTUK SEMUA KEBUTUHAN --- */}
      <Modal 
        isOpen={modalState.isOpen} 
        onClose={
            // Tentukan aksi onClose berdasarkan tipe modal
            modalState.type === 'saveSuccess' || modalState.type === 'cancel'
                ? handleCloseAndNavigate
                : closeModal
        }
        showCloseButton={modalState.type !== 'loading'}
      >
        {renderModalContent()}
      </Modal>
    </>
  );
}
export default CmsTalentEditSchoolForm;