import { useEffect, useState } from "react";
import type { IDataForm } from "../interfaces/IDataForm";

const DropUpMenu = () => {
    
  const [user, setUser] = useState<IDataForm[]>([]);

  const fetchData = async () => {
    const BASE_URL: string = import.meta.env.VITE_API_URL;
    try {
      const response = await fetch(BASE_URL, {
        method: "GET",
      });
      if (response.status != 200) {
        console.error("Failed to fetch data:", response.statusText);
        return;
      }
      const data: IDataForm[] = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    return ( 
       <>
        {user.map(u => (
            <div
              key={u.id}
              className="flex flex-col mt-5 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <h3 className="font-bold text-lg mb-2">Dados do Usuário</h3>
              <p>
                <span className="font-semibold">Nome:</span> {u.name}
              </p>
              <p>
                <span className="font-semibold">Username:</span> {u.username}
              </p>
            </div>
        ))}
        </>
     );
}
 
export default DropUpMenu;