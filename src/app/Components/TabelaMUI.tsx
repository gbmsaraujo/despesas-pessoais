
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { IDespesas } from "../services/despesasAPI";

type DespesasProps = {
despesas: IDespesas[]
}

export default function TabelaMUI({despesas}:DespesasProps) {
	return (
		<TableContainer>
			<Table aria-label='tabela despesas'>
				<TableHead>
					<TableRow>
						<TableCell align='left'>Despesa</TableCell>
						<TableCell align='left'>Categoria </TableCell>
						<TableCell align='left'>Dia</TableCell>
						<TableCell align='left'>Valor (R$)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{despesas.map((despesa) => (
						<TableRow
							key={despesa.id}
							sx={{
								"&:last-child td, &:last-child th": {
									border: 0
								}
							}}
						>
							<TableCell component='th' scope='row'>
								{despesa.descricao}
							</TableCell>
							<TableCell align='left'>{despesa.categoria}</TableCell>
							<TableCell align='left'>{despesa.dia}</TableCell>
							<TableCell align='left'>{(despesa.valor).toLocaleString('pt-Br')}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
