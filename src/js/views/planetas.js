import React, {useContext} from "react";
import "../../styles/home.css";
import { PlanetasCard } from "../component/cardplanetas";
import { Context } from "../store/appContext";

export const Planetas = () => {

	const {store, action} = useContext(Context);
	return <div className="text-center mt-5">{
		store.planets?.map((obj, i)=>{
			return <PlanetasCard name={obj.name} i={i} />
		})
	}
	</div>
};