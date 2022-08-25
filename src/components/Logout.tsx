import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { AppState } from "../store";
import { logout } from "../store/actions/userActions";

function Logout() {
  const { data } = useSelector((state: AppState) => state.user);  // state temizlendiğinden emin oluyoruz                                                                  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());  // logout fonksiyonu dispatch edildi.
  }, []);

  if (!data.username) return <Redirect to="/login" />; // logout a tıklandığında state temizlenir ve kullanıcı login sayfasına yönlendirilir.
  return <div>Logging out...</div>;
}
export default Logout;


