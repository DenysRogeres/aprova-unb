import { ButtonCalculate, Idioma, IdiomaScore, InputScore, InputScoreRedacao, TableMenu } from "./styles";

export function ScoreTable() {
    return(
        <>
            <TableMenu>
                <button>PAS 1</button>
                <button>PAS 2</button>
                <button>PAS 3</button>
            </TableMenu>

            <InputScore>
                <h2>Escore Bruto</h2>
                <input type="number" placeholder="Nota"/>
            </InputScore>

            <Idioma>
                <select name="idioma">
                    <option value="teste">Inglês</option>
                    <option value="teste2">Espanhol</option>
                    <option value="teste2">Francês</option>
                </select>
            </Idioma>

            <IdiomaScore>
                <input type="number" placeholder="Nota"/>
            </IdiomaScore>

            <InputScoreRedacao>
                <h2>Nota da redação</h2>
                <input type="number" placeholder="Nota"/>
            </InputScoreRedacao>
            
            <ButtonCalculate>
                CALCULAR
            </ButtonCalculate>
        </>
    )
}