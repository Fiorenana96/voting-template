import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Admin() {
  const [addForm, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [candidat, setCandidat] = useState([
    { id: "0", numero: "1", nom: "Rakoto", voix: 0, pourcentage: 0 },
    { id: "1", numero: "2", nom: "John", voix: 0, pourcentage: 0 },
    { id: "2", numero: "3", nom: "Fabrice", voix: 0, pourcentage: 0 },
  ]);

  const [newCandidat, setNewCandidat] = useState([""]);
  const [newNumber, setNewNumber] = useState([""]);

  const [editId, setEditId] = useState();

  const handelAdd = () => {
    setAddForm(!addForm);
    setHideEditBtn(!hideEditBtn);
    console.log(addForm, hideEditBtn);
  };

  const handelChangeNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handelChangeCandidat = (e) => {
    setNewCandidat(e.target.value);
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();

    const candidatCopy = [...candidat];
    const id = new Date().getTime();
    const numero = newNumber;
    const nom = newCandidat;

    candidatCopy.push({ id, numero, nom });

    setCandidat(candidatCopy);
    setNewCandidat("");
    setNewNumber("");
    setAddForm(false);
    setHideEditBtn(false);
  };

  const handelDelete = (id) => {
    const candidatCopy = [...candidat];
    const candidatCopyUpdated = candidatCopy.filter(
      (candidat) => candidat.id !== id,
    );

    setCandidat(candidatCopyUpdated);
  };

  const [hideAddBtn, setHideAddBtn] = useState(false);
  const [hideEditBtn, setHideEditBtn] = useState(false);

  const handelEdit = (id) => {
    setHideAddBtn(true);

    const candidatCopyEdit = candidat.find((candidat) => candidat.id === id);

    setNewCandidat(candidatCopyEdit.nom);
    setNewNumber(candidatCopyEdit.numero);
    setEditForm(true);
    setEditId(id);
  };

  const handelOnEdit = () => {
    const nouveauCandidat = candidat.map((candidat) => {
      if (candidat.id === editId) {
        return { ...candidat, numero: newNumber, nom: newCandidat }; // Modification du nom
      }
      return candidat;
    });

    setCandidat(nouveauCandidat);
    setEditForm(false);
    setHideAddBtn(false);
    setNewCandidat("");
    setNewNumber("");
  };

  const handelStartVoting = () => {
    console.log("handelStartVoting...");
  };

  return (
    <div>
      <h1> Liste des candidats </h1>

      <div className="btn">
        {!hideAddBtn && <button onClick={handelAdd}>+ Ajoutez</button>}
        <NavLink to="/voting">
          <button onClick={handelStartVoting}> Commencez la vote </button>{" "}
        </NavLink>
      </div>

      <div>
        {addForm ? (
          <form action="submit" onSubmit={handelOnSubmit}>
            <input
              value={newNumber}
              type="number"
              required
              name="numero"
              onChange={handelChangeNumber}
            />
            <input
              value={newCandidat}
              type="text"
              required
              name="nom"
              onChange={handelChangeCandidat}
            />
            <button> Ajoutez </button>
          </form>
        ) : (
          <span> </span>
        )}
      </div>

      <div>
        {editForm ? (
          <form action="submit" onSubmit={handelOnEdit}>
            <input
              value={newNumber}
              type="number"
              required
              name="numero"
              onChange={handelChangeNumber}
            />
            <input
              value={newCandidat}
              type="text"
              required
              name="nom"
              onChange={handelChangeCandidat}
            />
            <button> Modifier </button>
          </form>
        ) : (
          <span> </span>
        )}
      </div>

      <div>
        <table width="600px">
          <thead>
            <tr>
              <td> Numero</td>
              <td> Nom et Prénom</td>
            </tr>
          </thead>
          <tbody>
            {candidat.map((listeCandidat) => (
              <tr key={listeCandidat.id}>
                <td> {listeCandidat.numero} </td>
                <td> {listeCandidat.nom} </td>
                <td>
                  {!hideEditBtn && (
                    <button onClick={() => handelEdit(listeCandidat.id)}>
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handelDelete(listeCandidat.id)}>
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
