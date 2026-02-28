import LoginForm from "./LoginForm";

export default function LoginPage() {
  

  return (
    <div className="w-2xl mx-auto pt-2">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Login with your email and password
        </p>
      </header>

     <LoginForm />
    </div>
  )
}