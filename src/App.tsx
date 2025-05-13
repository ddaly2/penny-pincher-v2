import "./App.css";
import { Button } from "@/components/ui/button";

const App = () => {
  return (
    <nav className="flex items-center p-5 justify-between bg-background border border-border rounded-lg mx-5 mt-5 shadow-md">
      <div className="text-xl font-bold text-foreground">Penny Pincher</div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Features</Button>
        <Button variant="ghost">Pricing</Button>
        <Button variant="ghost">Contact</Button>
      </div>
    </nav>
  );
};

export default App;
