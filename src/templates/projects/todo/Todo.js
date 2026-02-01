import Header from "../../component/Header";
import Footer from "../../component/Footer";
import datas from "./data/data";

const Todo = (() => {

    return (
        <div id="wrap">
            <Header />

            <section id="container" className="main">
                <div className="todo-container" id="todoList">
                    <div className="record-container">
                        <div className="title-section">
                            <h1>TODOLIST</h1>
                            <div className="btn-group">
                                <button className="add-btn">오늘 할 일 추가</button>
                                <button className="add-btn">할 일 수정</button>
                            </div>
                        </div>

                        <table className="todo-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>제목</th>
                                    <th>요약 내용</th>
                                    <th>등록일</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                            <tbody className="todo-list">
                                {datas.length > 0 ? (
                                    datas.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.id}</td>
                                            <td>{data.todo}</td>
                                            <td>{data.summary}</td>
                                            <td>{data.status}</td>
                                            <td>
                                                <button className="delete-btn">삭제</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: "center" }}>오늘 할 일이 없습니다.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
});

export default Todo;