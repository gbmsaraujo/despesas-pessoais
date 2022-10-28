import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent
} from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TabelaMUI from "../Components/TabelaMUI";
import { getDespesas, IDespesas } from "../services/despesasAPI";

const MONTHS = [
	{
		month: "Janeiro",
		indice: "01"
	},
	{
		month: "Fevereiro",
		indice: "02"
	},
	{
		month: "Março",
		indice: "03"
	},
	{
		month: "Abril",
		indice: "04"
	},
	{
		month: "Maio",
		indice: "05"
	},
	{
		month: "Junho",
		indice: "06"
	},
	{
		month: "Julho",
		indice: "07"
	},
	{
		month: "Agosto",
		indice: "08"
	},
	{
		month: "Setembro",
		indice: "09"
	},
	{
		month: "Outubro",
		indice: "10"
	},
	{
		month: "Novembro",
		indice: "11"
	},
	{
		month: "Dezembro",
		indice: "12"
	}
];

export function getDateValue(date:string):string {
	return date;
}

export default function Despesas() {
	const [year, setYear] = useState<string>("");
	const [month, setMonth] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [despesas, setDespesas] = useState<Array<IDespesas>> ([])
	let history = useHistory()

	function handleYearChange(event: SelectChangeEvent) {
		setYear(event.target.value as string);
	}

	function handleMonthChange(event: SelectChangeEvent) {
		setMonth(event.target.value as string);
	}

	useEffect(() => {
		const formatDate = `${year}-${month}`;
		if (formatDate.length > 5) {
			setDate(formatDate);
			history.push(`/despesas/${formatDate}`)
		}
	}, [year, month, history]);

	useEffect(() => {
		async function fetchDespesas() {
			const despesas:IDespesas[] = await getDespesas(date)
			setDespesas(despesas)
		}

		fetchDespesas()

	},[date])

	getDateValue(date)

	return (
		<div>
			<FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id='demo-simple-select-standard-label'>
					Ano
				</InputLabel>
				<Select
					labelId='demo-simple-select-standard-label'
					id='demo-simple-select-standard'
					value={year}
					onChange={handleYearChange}
					label='Ano'
				>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value='2020'>2020</MenuItem>
					<MenuItem value='2021'>2021</MenuItem>
				</Select>
			</FormControl>

			<FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id='demo-simple-select-standard-label'>
					Mês
				</InputLabel>
				<Select
					labelId='demo-simple-select-standard-label'
					id='demo-simple-select-standard'
					value={month}
					onChange={handleMonthChange}
					label='Mês'
				>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					{MONTHS.map((month) => (
						<MenuItem key={month.month} value={month.indice}>
							{month.month}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<TabelaMUI despesas={despesas}/>
		</div>
	);
}
