import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSeclectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Durable",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "Robust",
      amount: 50,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Scalable",
      amount: 20,
      category: "Entertainment",
    },
    {
      id: 4,
      description: "Maliable",
      amount: 70,
      category: "Utilities",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSeclectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id != id))
        }
      />
    </div>
  );
}

export default App;
