import styled from "styled-components";

export const TableMenu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 456px;
    height: 74px;
    
    position: absolute;
    right: 0;
    margin-top: 200px;
    margin-right: 50px;

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