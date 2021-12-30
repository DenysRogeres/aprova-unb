import styled from "styled-components";

export const TableMenu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 456px;
    height: 74px;
    
    position: absolute;
    right: 0;
    margin-top: 100px;
    margin-right: 100px;

    background-color: #FBFCFF;
    border-radius: 50px;

    button {
        width: 120px;
        height: 50px;
        border: none;
        background: #FFFF;
        border-radius: 20px;

        font-weight: bold;
        font-size: 2em;
        cursor: pointer;

        color: #818181;

        &:focus, &:hover {
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
            background: #F1F1F1;
            color: #303030;
        }
    }

`

export const InputScore = styled.div`    
    position: absolute;
    right: 0;
    margin-top: 230px;
    margin-right: 100px;

    h2 {
        color: white;
        margin-bottom: 14px;
        margin-left: 22px;
        font-weight: bold;
    }
    
    input {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        text-align: center;
        
        font-weight: bold;
        font-size: 2em;
        color: #303030;

        width: 456px;
        height: 74px;
        background-color: #FBFCFF;
        border-radius: 50px;
    }

`

export const Idioma = styled.div`
    position: absolute;
    right: 0;
    margin-top: 400px;
    margin-right: 356px;

    select{
        width: 200px;
        height: 74px;
        background-color: #FBFCFF;
        border-radius: 50px;

        font-weight: bold;
        font-size: 2em;
        color: #303030;  
        text-align: center;  
        
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
`

export const IdiomaScore = styled.div`

    position: absolute;
    right: 0;
    margin-top: 400px;
    margin-right: 100px;


    input {
        width: 200px;
        height: 74px;
        background-color: #FBFCFF;
        border-radius: 50px;

        font-weight: bold;
        font-size: 2em;
        color: #303030;  
        text-align: center;  
        
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

`

export const InputScoreRedacao = styled.div`    
    position: absolute;
    right: 0;
    margin-top: 520px;
    margin-right: 100px;

    h2 {
        color: white;
        margin-bottom: 14px;
        margin-left: 22px;
        font-weight: bold;
    }
    
    input {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        text-align: center;
        
        font-weight: bold;
        font-size: 2em;
        color: #303030;

        width: 456px;
        height: 74px;
        background-color: #FBFCFF;
        border-radius: 50px;
    }
`

export const ButtonCalculate = styled.button`
    position: absolute;
    right: 0;
    margin-top: 700px;
    margin-right: 100px;

    cursor: pointer;

    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    text-align: center;
    
    font-weight: bold;
    font-size: 2em;
    color: #FFFF;

    width: 456px;
    height: 74px;
    background-color: #2457A5;
    border-radius: 30px;
    
    &:hover {
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
    }

`
