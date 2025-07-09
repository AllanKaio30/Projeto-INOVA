
export const mapToBackendFormat = (author) => {
  return {
    nome: author.name,
    email: author.email,
    vinculo: author.bond,
    departamento: author.department,
    campus: author.campus,
    universidade: author.institution,
  };
};

export function mapFromBackendFormat(autor) {
  return {
    id: autor.id,
    name: autor.nome,
    email: autor.email,
    bond: autor.vinculo,
    department: autor.departamento,
    campus: autor.campus,
    university: autor.universidade,
    registeredPIs: autor.registeredPIs || 0 // se não tiver, default é 0
  };
}
