import { getAxios } from "./httpService"

export interface IDespesas {
	id: number
	descricao: string
	categoria: string
	valor: number
	mes: string
	dia:string
}

export async function getDespesas(date:string) {
  const {data} = await getAxios(`http://localhost:3001/despesas?mes=${date}&_sort=dia`)

  return data
}
