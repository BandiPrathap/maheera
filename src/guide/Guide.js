import React, { useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import AdminDoc from "./AdminDoc";
import UserDoc from "./UserDoc";

const Guide = () => {
    const [activeDoc, setActiveDoc] = useState("admin"); // AdminDoc active by default

    return (
        <Container className="mt-4">
            <div className="d-flex gap-3 mt-3">
                <Button
                    variant="primary"
                    className={`px-4 py-2 fw-bold ${activeDoc === "admin" ? "shadow-lg" : "opacity-50"}`}
                    onClick={() => setActiveDoc("admin")}
                >
                    Admin Doc
                </Button>
                <Button
                    variant="secondary"
                    className={`px-4 py-2 fw-bold ${activeDoc === "user" ? "shadow-lg" : "opacity-50"}`}
                    onClick={() => setActiveDoc("user")}
                >
                    User Doc
                </Button>
            </div>

            <Card className="mt-4 p-3 shadow">
                {activeDoc === "admin" && <AdminDoc />}
                {activeDoc === "user" && <UserDoc />}
            </Card>
        </Container>
    );
};

export default Guide;
