import { useState } from "react";
import { jwtDecode } from "jwt-decode";

function Dashboard() {
    const [res, setRes] = useState("");
    const token = localStorage.getItem("authTokens");

    let user_id, username, full_name, image;

    if (token) {
        try {
            const decode = jwtDecode(token);
            user_id = decode.user_id;
            username = decode.username;
            full_name = decode.full_name;
            image = decode.image;
        } catch (error) {
            console.error("Token inválido:", error);
            // Aqui você pode redirecionar ou lidar com o erro como preferir
        }
    }

    return (
        <div className="container">
            <div className="container py-5 h-100">
                <section className="row d-flex justify-content-center align-items-center h-100">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem unde odit ut,
                        officiis asperiores molestiae eum! Assumenda ipsum sunt praesentium, nostrum,
                        distinctio voluptatibus incidunt doloribus recusandae reprehenderit eius,
                        repellendus itaque.
                    </p>
                    <button type="button">Ação</button>
                </section>
                <section>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem unde odit ut,
                        officiis asperiores molestiae eum! Assumenda ipsum sunt praesentium, nostrum,
                        distinctio voluptatibus incidunt doloribus recusandae reprehenderit eius,
                        repellendus itaque.
                    </p>
                </section>
                <section>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem unde odit ut,
                        officiis asperiores molestiae eum! Assumenda ipsum sunt praesentium, nostrum,
                        distinctio voluptatibus incidunt doloribus recusandae reprehenderit eius,
                        repellendus itaque.
                    </p>
                </section>
            </div>
            <div>
                {username && <p>Olá, {username}</p>}
            </div>
        </div>
    );
}

export default Dashboard;
