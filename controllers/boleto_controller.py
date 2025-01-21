from database.database import engine
from models.models import Boleto
from sqlalchemy.orm import Session
from sqlalchemy import select


def insert(codigo:str) -> None:
    with Session(engine) as session:
            boletinho = Boleto(
                codigo_boleto= codigo
            )
            session.add_all([boletinho])
            session.commit()

def select_all() -> list:
    with Session(engine) as session:
        stmt = select(Boleto)
        boletos = session.scalars(stmt).all()
        lista_de_codigos = []
        for boleto in boletos:
            lista_de_codigos.append(boleto.codigo_boleto)
        return lista_de_codigos