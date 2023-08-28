import "../globals.css";
import Header from "../components/header/Header"

export const metadata = {
  title: 'Hi , This is Asem Iqbal',
  description: 'A MERN Stack Devoloper',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        </body>
    </html>
  )
}
