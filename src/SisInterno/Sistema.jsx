import React, { useState, useEffect } from 'react';
import ConexaoApi from '../api/conexaoapi'; // Importe o arquivo de conexão API

const Sistema = () => {
  const [pontosTuristicos, setPontosTuristicos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtenha o token salvo no localStorage
        const token = localStorage.getItem('token');

        // Verifique se há um token antes de fazer a chamada à API
        if (token) {
          const data = await ConexaoApi.getPontosTuristicos(token);
          setPontosTuristicos(data);
        }
      } catch (error) {
        console.error('Erro ao obter pontos turísticos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <main>

        <div className="catalog-container">
          <p className="catalog-title">Esse é o nosso catálogo de pontos turísticos cadastrados:</p>
          {pontosTuristicos.length === 0 ? (
            <p>Não existem pontos turísticos cadastrados.</p>
          ) : (
            <div className="card-container">
              {pontosTuristicos.map((pontoTuristico) => (
                <div key={pontoTuristico.id} className="card">
                  <div className="card-header">
                    <h5 className="card-title">{pontoTuristico.nome}</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{pontoTuristico.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <style>
        {`
        .catalog-container {
          text-align: center;
          margin-bottom: 20px;
        }

        .catalog-title {
          font-size: 18px;
          font-weight: bold;
        }

        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 20px;
        }

        .card {
          background-color: #f2f2f2;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .card-header {
          background-color: #48A55B;
          padding: 10px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card-title {
          font-size: 18px;
          font-weight: bold;
          color: #fff;
          margin: 0;
        }

        .card-body {
          padding: 20px;
        }

        .card-text {
          font-size: 14px;
          color: #666;
        }
        `}
      </style>
    </div>
  );
};

export default Sistema;