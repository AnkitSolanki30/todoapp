import { useNavigate } from "react-router-dom";
import { clearCookie } from "../../utils/cookieUtils";
const ACCESS_TOKEN = "TodoAccessToken";

export function AdminPage() {
  const navigate = useNavigate();
  const logout = () => {
    clearCookie(ACCESS_TOKEN);
    navigate("/login");
  };
  return (
    <>
      <div className="overflow-auto h-100vh">
        <div>Admin Home</div>
        <button onClick={logout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </>
  );
}
