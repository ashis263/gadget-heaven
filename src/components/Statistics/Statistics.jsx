import { useContext } from "react";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Scatter,
  ResponsiveContainer,
  Legend,
  Tooltip
} from "recharts";
import GadgetContext from '../../contexts/Gadgetcontext'


export default function Statistics() {
  const data = useContext(GadgetContext);
  return (
    <div>
      <div className="bg-[rgb(149,56,226)] text-center text-white">
        <div className="w-3/5 mx-auto py-5 sm:py-10">
          <h3 className="text-xl sm:text-3xl font-bold">Statistics</h3>
          <p className="text-xs sm:text-sm">X axis shows the name of the products, Y axis shows the prices and red dots shows the rating of the products. Click the bars to see more.</p>
        </div>
      </div>
      <div className=" bg-[rgba(190,190,190,.19)] py-10 sm:py-20">
        <div className="w-[90%] mx-auto">
          <div className="w-full h-80">
            <ResponsiveContainer>
              <ComposedChart
                width={400}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="product_title" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="price" barSize={20} fill="#413ea0" />
                <Scatter dataKey="rating" fill="red" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
