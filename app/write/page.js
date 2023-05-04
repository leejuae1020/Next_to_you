export default function Write() {
  return (
    <div className="p-20">
      <h4>글써보자</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="제목을 입력하세요" />
        <input name="content" placeholder="내용을 입력하세요" />
        <button className="submit-btn" type="submit">
          전송
        </button>
      </form>
    </div>
  );
}

//전송버튼 누르면 서버에 글 보냄
//서버는 DB에 글 저장함
//input name 속성을 꼭 지정해주어야 서버에서 걸러서 저장함
