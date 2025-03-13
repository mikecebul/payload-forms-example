import { LoginForm } from '@/components/login-form'
import './globals.css'

export default async function HomePage() {
  return (
    <div className="w-full max-w-sm">
      <LoginForm />
    </div>
  )
}
