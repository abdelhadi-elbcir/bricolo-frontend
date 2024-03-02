import { useEffect, useState } from "react";
import { CityDto } from "../../utils/models/cityDto";
import { deleteCity, getAllCities } from "../../services/cityService";

interface GetListProps { }

const GetList: React.FC<GetListProps> = () => {
    const [cityList, setCityList] = useState<CityDto[]>([]);

    useEffect(() => {
        fetchCityList();
    }, []);


    const fetchCityList = async () => {
        try {
            getAllCities().then((res: any) => {
                setCityList(res.data);
            }).catch((err: any) => console.error(err))
        } catch (error) {
            console.error("Error fetching city list:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const res = deleteCity(id);
            console.log(res);
            fetchCityList();
        } catch (error) {
            console.error("Error deleting city:", error);
        }
    };

    return (
        <div>
            <h2>City List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cityList.map((city) => (
                        <tr key={city.id}>
                            <td>{city.id}</td>
                            <td>{city.name}</td>
                            <td>
                                <button onClick={() => handleDelete(city.id)}>Delete</button>
                                {/* Add update button and functionality here */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetList;
