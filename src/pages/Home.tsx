import { CounterComponent } from "../components/CounterComponent";

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Selamat Datang !!</h1>
      <p>Ini adalah halaman Utama</p>
      <CounterComponent />
    </div>
  );
};

export default Home;
