import React from "react";
import { convertToCommas } from "../../utils/convertToCommas";
import { PiPencilSimpleLine, PiTrash, PiInfo } from "react-icons/pi";
import UserItem from "./UserItem";

export default function UserList() {
	const users = [
		{
			name: "Odis Rhinehart",
			level: "Warga",
			favMenu: "Chicken & Ribs Combo",
			totalTransaction: 194700,
		},
		{
			name: "Kris Roher",
			level: "Warga",
			favMenu: "Surf & Turf Gift Basket",
			totalTransaction: 631200,
		},
		{
			name: "Serenity Fisher",
			level: "Juragan",
			favMenu: "Fried Chicken Dinne",
			totalTransaction: 1040920,
		},
		{
			name: "Brooklyn Warren",
			level: "Sultan",
			favMenu: "Surf & Turf Gift Basket",
			totalTransaction: 730500,
		},
		{
			name: "Franco Delort",
			level: "Juragan",
			favMenu: "Chicken & Ribs Combo",
			totalTransaction: 96000,
		},
		{
			name: "Saul Geoghegan",
			level: "Juragan",
			favMenu: "Surf & Turf Gift Basket",
			totalTransaction: 256000,
		},
		{
			name: "Cristofer Vetrovs",
			level: "Konglomerat",
			favMenu: "Shaking Beef Tri-Tip",
			totalTransaction: 782600,
		},
	];

	return (
		<ul className="mt-4">
			{users.map((user) => {
				return <UserItem user={user} />;
			})}
		</ul>
	);
}