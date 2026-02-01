import React, { useState, useEffect } from 'react';
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { dietPlanData } from "./data/dietDummy";

const Diet = () => {
    const [dietPlans, setDietPlans] = useState([]);
    const [weight, setWeight] = useState("");
    const [weightHistory, setWeightHistory] = useState([
        { day: '1일차', kg: 85 },
        { day: '3일차', kg: 83.5 },
        { day: '5일차', kg: 82.8 },
    ]);
    const [runLog, setRunLog] = useState("");
    const [dailyRuns, setDailyRuns] = useState(["1일차: 5km 완료 (30분)", "2일차: 5km 완료 (28분)"]);

    useEffect(() => {
        setDietPlans(dietPlanData);
    }, []);

    // 몸무게 추가 핸들러
    const addWeight = () => {
        if (!weight) return;
        const newRecord = { day: `${weightHistory.length + 1}차`, kg: parseFloat(weight) };
        setWeightHistory([...weightHistory, newRecord]);
        setWeight("");
    };

    // 러닝 기록 추가 핸들러
    const addRun = () => {
        if (!runLog) return;
        setDailyRuns([...dailyRuns, runLog]);
        setRunLog("");
    };

    return (
        <div id="wrap">
            <Header />
            <main id="container" className="main">
                <section className="project-wrap">
                    <div className="diet-header">
                        <h2>🔥 다이어트 기록방</h2>
                        <p className="sub-title">10kg 감량을 향한 체중 변화 추이</p>
                    </div>

                    {/* 체중 변화 그래프 영역 */}
                    <div className="chart-container">
                        <h3>체중 변화 그래프 (kg)</h3>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <LineChart data={dietPlans} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="day" />
                                    <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
                                    <Tooltip />
                                    <Line 
                                        type="monotone" 
                                        dataKey="weight" 
                                        stroke="#ff5722" 
                                        strokeWidth={3} 
                                        dot={{ r: 6 }} 
                                        activeDot={{ r: 8 }} 
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="diet-content">
                        <h3>상세 식단 및 운동 계획</h3>
                        <table className="diet-table">
                            <thead>
                                <tr>
                                    <th>날짜</th>
                                    <th>체중</th>
                                    <th>아침</th>
                                    <th>점심</th>
                                    <th>저녁</th>
                                    <th>운동 계획</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dietPlans.map((plan, index) => (
                                    <tr key={index}>
                                        <td className="day-col">{plan.day}</td>
                                        <td className="weight-col">{plan.weight}kg</td>
                                        <td>{plan.breakfast}</td>
                                        <td>{plan.lunch}</td>
                                        <td>{plan.dinner}</td>
                                        <td className="workout-col">{plan.workout}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Diet;