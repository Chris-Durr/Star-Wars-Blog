import React, {useContext} from "react";
import "../../styles/home.css";
import { Carta } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {

	const {store, action} = useContext(Context);
	return <div className="text-center mt-5">{
		store.people?.map((obj, i)=>{
			return <Carta name={obj.name} gender={obj.gender} birth_year={obj.birth_year} />
		})
	}
	</div>
};