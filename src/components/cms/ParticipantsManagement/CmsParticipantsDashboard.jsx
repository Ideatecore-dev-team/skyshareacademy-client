import React, { useEffect, useState } from "react"; 
import skyshareApi from "../../../utilities/skyshareApi"; 
import CmsNavCard from "../CmsNavCard"; 
import { Link } from "react-router-dom"; 
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"; 
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5"; // 👈 Impor ikon yang dibutuhkan
import { MdOutlinePeople } from "react-icons/md";

const COURSE_STRUCTURE = [ 
    { id: 1, name: "Episode 1", tasks: ["tugas A"] }, 
    { id: 2, name: "Episode 2", tasks: ["tugas A", "tugas B"] }, 
    { id: 3, name: "Episode 3", tasks: ["tugas A"] }, 
    { id: 4, name: "Episode 4", tasks: ["tugas A", "tugas B"] }, 
]; 

const DUMMY_PARTICIPANTS = [ 
    { id: 1, nama: "Alex Santoso", asal: "Jakarta", episodes: COURSE_STRUCTURE.map(episode => ({ id: episode.id, isCompleted: false, tasks: episode.tasks.map(taskName => ({ name: taskName, isCompleted: false })) })) }, 
    { id: 2, nama: "Budi Cahyono", asal: "Surabaya", episodes: COURSE_STRUCTURE.map(episode => ({ id: episode.id, isCompleted: false, tasks: episode.tasks.map(taskName => ({ name: taskName, isCompleted: false })) })) } 
]; 

const episodeColors = { 
    'lulus': 'bg-secondary-1', 
    'belum lulus': 'bg-red-500', 
}; 

function CmsParticipantsDashboard() { 
    const [participants, setParticipants] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [expandedRows, setExpandedRows] = useState([]); 
    const [expandedEpisodes, setExpandedEpisodes] = useState([]); 
    // State baru untuk menyimpan struktur kursus 
    const [courseStructure, setCourseStructure] = useState(COURSE_STRUCTURE); 
    
    useEffect(() => { 
        const getParticipantsData = async () => { 
            setLoading(true); 
            try { 
                // Untuk demo, kita gunakan dummy data 
                const initialParticipants = DUMMY_PARTICIPANTS.map(p => ({ 
                    ...p, 
                    episodes: p.episodes.map(e => ({ 
                        ...e, 
                        isCompleted: e.tasks.every(t => t.isCompleted), 
                    })), 
                    status: 'belum lulus', 
                })); 
                setParticipants(initialParticipants); 
            } catch (error) { 
                console.log("Error fetching participants data:", error); 
                setParticipants(DUMMY_PARTICIPANTS); 
            } finally { 
                setLoading(false); 
            } 
        }; 
        getParticipantsData(); 
    }, []); 
    
    const toggleRow = (id) => { 
        setExpandedRows((prev) => prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id] ); 
    }; 
    
    const toggleEpisodeTasks = (episodeId) => { 
        setExpandedEpisodes((prev) => prev.includes(episodeId) ? prev.filter((id) => id !== episodeId) : [...prev, episodeId] ); 
    }; 
    
    const handleTaskChange = (participantId, episodeId, taskName) => { 
        setParticipants(prevParticipants => { 
            return prevParticipants.map(participant => { 
                if (participant.id === participantId) { 
                    const updatedEpisodes = participant.episodes.map(episode => { 
                        if (episode.id === episodeId) { 
                            const updatedTasks = episode.tasks.map(task => { 
                                if (task.name === taskName) { 
                                    return { ...task, isCompleted: !task.isCompleted }; 
                                } 
                                return task; 
                            }); 
                            const isEpisodeCompleted = updatedTasks.every(task => task.isCompleted); 
                            return { ...episode, isCompleted: isEpisodeCompleted, tasks: updatedTasks }; 
                        } 
                        return episode; 
                    }); 
                    const isAllEpisodesCompleted = updatedEpisodes.every(episode => episode.isCompleted); 
                    const newStatus = isAllEpisodesCompleted ? "lulus" : "belum lulus"; 
                    // Ubah dari null 
                    return { ...participant, episodes: updatedEpisodes, status: newStatus }; 
                } 
                return participant; 
            }); 
        }); 
    }; 
    
    const handleEpisodeManualCheck = (participantId, episodeId) => { 
        setParticipants(prevParticipants => { 
            return prevParticipants.map(participant => { 
                if (participant.id === participantId) { 
                    const updatedEpisodes = participant.episodes.map(episode => { 
                        if (episode.id === episodeId) { 
                            const newIsCompleted = !episode.isCompleted; 
                            const updatedTasks = episode.tasks.map(task => ({ ...task, isCompleted: newIsCompleted })); 
                            return { ...episode, isCompleted: newIsCompleted, tasks: updatedTasks }; 
                        } 
                        return episode; 
                    }); 
                    const isAllEpisodesCompleted = updatedEpisodes.every(episode => episode.isCompleted); 
                    const newStatus = isAllEpisodesCompleted ? "lulus" : "belum lulus"; 
                    // Ubah dari null 
                    return { ...participant, episodes: updatedEpisodes, status: newStatus }; 
                } 
                return participant; 
            }); 
        }); 
    }; 
    
    if (loading) { 
        return <div className="text-center mt-20">Loading...</div>; 
    } 
    
    return ( 
        <div className="bg-background flex flex-col pb-44 pt-12 items-center self-stretch h-auto"> 
            <div className="content-1 flex gap-4 w-[1152px] px-4 md:px-0"> 
                <div className="hidden md:block"> 
                    <CmsNavCard /> 
                </div> 
                <div className="w-[848.02px]"> 
                    <div className="mb-8"> 
                        <h1 className="headline-1">Participants Management</h1> 
                        <p className="paragraph"> Kelola data peserta disini. </p> 
                    </div> 
                    <div className="shadow-md border-2 border-black rounded-xl px-3 bg-neutral-white"> 
                        <div className="header-table bg-background flex justify-between rounded-xl mt-5 py-3 px-3"> 
                            <h4 className="headline-4 flex items-center gap-2"> 
                                <MdOutlinePeople className="text-3xl" /> 
                                Daftar Peserta
                            </h4> 
                            <Link to="/cms/participants/add" className="bg-primary-1 hover:bg-primary-2 text-white px-4 py-2 rounded-md"> Tambah Peserta </Link> 
                        </div> 
                        <div className="table-content mt-5 ml-2 overflow-x-auto"> 
                            <table className="min-w-full table-auto border-collapse"> 
                                <thead className="sticky top-0 bg-neutral-white z-10"> 
                                    <tr> 
                                        <th className="pr-4 pl-2 py-3">No.</th> 
                                        <th className="pr-4 py-3">Nama</th> 
                                        <th className="pr-4 py-3">Asal</th> 
                                        <th className="px-4 py-3">Status</th> 
                                        {courseStructure.map((episode) => ( 
                                            <th key={episode.id} className="px-4 py-3 text-center min-w-[100px]"> {episode.name} </th> 
                                        ))} 
                                    </tr> 
                                </thead> 
                                <tbody> 
                                    {participants.map((participant, index) => ( 
                                        <React.Fragment key={participant.id}> 
                                            <tr className="border-b border-gray-200"> 
                                                <td className="pl-3 py-4 text-left font-semibold"> 
                                                    <button onClick={() => toggleRow(participant.id)}> 
                                                        {expandedRows.includes(participant.id) ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />} 
                                                    </button> 
                                                    {index + 1} 
                                                </td> 
                                                <td className="pr-4 py-4 text-left">{participant.nama}</td> 
                                                <td className="pr-4 py-4 text-left">{participant.asal}</td> 
                                                <td className="px-4 py-4 text-left min-w-[140px]"> 
                                                    <p className={`pb-1 text-center font-bold text-white rounded-full ${episodeColors[participant.status.toLowerCase()]}`}> 
                                                        {participant.status} 
                                                    </p> 
                                                </td> 
                                                {participant.episodes.map((episode) => ( 
                                                    <td key={episode.id} className="px-4 py-4 text-center"> 
                                                        <button onClick={() => handleEpisodeManualCheck(participant.id, episode.id)} className="flex items-center justify-center gap-1 mx-auto" > 
                                                            {episode.isCompleted ? <FaCheckCircle className="text-green-500" /> : <FaTimesCircle className="text-red-500" />} 
                                                        </button> 
                                                    </td> 
                                                ))} 
                                            </tr> 
                                            {expandedRows.includes(participant.id) && ( 
                                                <tr> 
                                                    <td colSpan={4 + courseStructure.length} className="p-4 bg-gray-50"> 
                                                        <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${courseStructure.length}, minmax(0, 1fr))` }}> 
                                                            {participant.episodes.map((episode) => ( 
                                                                <div key={episode.id} className="bg-white p-4 rounded-lg shadow-inner"> 
                                                                    <h5 className="font-bold">{courseStructure.find(e => e.id === episode.id).name}</h5> 
                                                                    <div className="flex flex-col gap-2 mt-2"> 
                                                                        {episode.tasks.map((task, taskIndex) => ( 
                                                                            <div key={taskIndex} className="flex items-center gap-2"> 
                                                                                <input type="checkbox" id={`task-${participant.id}-${episode.id}-${taskIndex}`} checked={task.isCompleted} onChange={() => handleTaskChange(participant.id, episode.id, task.name)} className="form-checkbox text-blue-600" /> 
                                                                                <label htmlFor={`task-${participant.id}-${episode.id}-${taskIndex}`}>{task.name}</label> 
                                                                            </div> 
                                                                        ))} 
                                                                    </div> 
                                                                </div> 
                                                            ))} 
                                                        </div> 
                                                    </td> 
                                                </tr> 
                                            )} 
                                        </React.Fragment> 
                                    ))} 
                                </tbody> 
                            </table> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
} 

export default CmsParticipantsDashboard;