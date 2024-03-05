import AllEmp from "@/components/AllEmp";
import New from "@/components/New";

export default async function Home() {
  return (
    <>
      <div className="main">
        <div>
          <New />
          <AllEmp />
        </div>
      </div>
    </>
  );
}
