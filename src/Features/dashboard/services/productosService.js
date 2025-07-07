import { supabase } from "../components/supabaseClient";

const obtenerUsuarioActual = () => {
  const user = JSON.parse(localStorage.getItem("usuarioActual"));
  return user;
};

export const obtenerProductos = async () => {
  const { data, error } = await supabase.from("productos").select("*");
  if (error) throw new Error("Error al obtener productos");
  return data;
};

export const crearProductoDB = async (producto) => {
  const user = JSON.parse(localStorage.getItem("usuarioActual"));
  if (!user || !user.id) throw new Error("No hay usuario autenticado");

  const productoConUser = {
    ...producto,
    price: Number(producto.price),
    user_id: user.id,
  };

  const { error } = await supabase.from("productos").insert([productoConUser]);
  if (error) {
    console.error("Error al crear producto:", error);
    throw new Error("Error al crear producto");
  }
};

export const editarProductoDB = async (id, productoActualizado) => {
  const { error } = await supabase
    .from("productos")
    .update(productoActualizado)
    .eq("id", id);
  if (error) throw new Error("Error al editar producto");
};

export const eliminarProductoDB = async (id) => {
  console.log("Eliminando producto con id:", id);
  const { error } = await supabase.from("productos").delete().eq("id", id);
  if (error) {
    console.error("Error de Supabase al eliminar:", error);
    throw new Error("Error al eliminar producto");
  }
};
