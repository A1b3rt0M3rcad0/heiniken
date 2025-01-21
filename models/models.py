from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
class Base(DeclarativeBase):
    pass

class Boleto(Base):

    __tablename__ = 'boleto'
    id: Mapped[int] = mapped_column(primary_key=True)
    codigo_boleto: Mapped[str] = mapped_column(String(100))