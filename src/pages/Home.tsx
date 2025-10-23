import { CounterComponent } from "../components/CounterComponent";
import { CounterComponentRTK } from "../components/CounterComponentRTK";

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Selamat Datang !!</h1>
      <p>Ini adalah halaman Utama</p>

      <h2>React Redux</h2>
      {/* uncomment di store untuk lihat setupnya */}
      <CounterComponent />

      <h2>Redux Toolkit</h2>
      <CounterComponentRTK />
    </div>
  );
};

export default Home;
