import { useEffect, useState } from "react";

function Todo() {
    
    const [task, setTask] = useState('')
    const [list, setList] = useState([])

    useEffect(()=>{
        const listStorage = localStorage.getItem('@task')
        if (listStorage) {
            setList(JSON.parse(listStorage))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('@task', JSON.stringify(list))
    },[list])
    
    function handleRegister(e) {
        e.preventDefault();

        if (task.length <= 2) {
            alert('O campo deve ter mais de dois caracteres')
        } else {
            setList([...list, task])
            setTask('');

            alert('Cadastro Realizado com Sucesso')
        }
    }

    return(
        <div>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Tarefa: </label>
                    <input placeholder="Descreva sua tarefa" value={task} onChange={(e) => setTask(e.target.value)} />
                </div>
                <br/>
                <button>Salvar Tarefa</button>
            </form>
            
            <div>
                <ul>
                    {Array.isArray(list) && list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;