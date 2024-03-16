import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import { Toaster } from "react-hot-toast";
import Header from "./component/Header";
import useAllPools from "./hooks/useAllPools";
import EachPool from "./component/PoolCard";


configureWeb3Modal();

function App() {
  const allPool = useAllPools()
  console.log('====================================');
  console.log(allPool);
  console.log('====================================');
  return (
    <>
      <Header />
       {allPool.map((pool, poolIndex) => (
          <div key={poolIndex} className="mt-4">
            {pool.map((item, itemIndex) => (
              <EachPool
                key={itemIndex}
                index={poolIndex}
                totalStakers={Number(item[0])}
                totalStakedAmount={Number(item[1])}
                rewardReserve={Number(item[2])}
                rewardRate={Number(item[3])}
                // Assuming PoolCount is a property of each item
                // PoolCount={Number(item.PoolCount)}
              />
            ))}
          </div>
        ))}
      <Toaster />
    </>
  );
}

export default App;
