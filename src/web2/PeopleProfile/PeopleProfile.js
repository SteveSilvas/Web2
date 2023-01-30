import { useState } from "react";
import "./PeopleProfile.css";
import { FaEdit } from "react-icons/fa";
import ImgInputView from "../../components/ImgInputView/ImgInputView";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
function PeopleProfile({ nome, nascimento, login, foto }) {
    const [imgSrc, setImgSrc] = useState(foto);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [email, setEmail] = useState();

    return (
        <div className="PeopleProfile">
            <div className="Row" id="HeaderProfile">
                <ImgInputView  src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" editing={editMode} />
                {renderEditBtn()}
            </div>

            <div className="Row">
                <label>Nome:</label>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!editMode}
                />
            </div>

            <div className="Row">
                <label>Nascimento:</label>
                <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    disabled={!editMode}
                />
            </div>
            <div className="Row">
                <label>Email:</label>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e)}
                    disabled={!editMode}
                />
            </div>
            <div >{renderSaveBtn()}</div>
        </div>
    );

    function renderEditBtn() {
        return (
            !editMode && (
                <FaEdit
                    className="Edit-icon"
                    onClick={(e) => onSetEditMode(e)}
                />
            )
        );
    }

    function onSetEditMode(e) {
        e.preventDefault();
        setEditMode(!editMode);
    }

    function renderSaveBtn() {
        return editMode ? <Button className="ConfirmButton" onClick={onSaveClick} text="Salvar"/> : "";
    }

    function onSaveClick() {
        setEditMode(false);
    }
}

export default PeopleProfile;
