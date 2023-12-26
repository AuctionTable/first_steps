import { connect } from "@/dbConfig/dbConfig"

export default function LoginPage() {

    connect();

    return(
        <h1>Login</h1>
    )
}