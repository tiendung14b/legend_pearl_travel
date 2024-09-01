export default function Home() {
  return (
    <main>
      <h1 class="font-bold">
        Thư mục app tương ứng với đường dẫn url/
      </h1>
      <div class="flex flex-col">
        <a href="/shorts">
          Thư mục app/shorts tương ứng với đường dẫn url/shorts 
        </a>
        <a href="/translation">
          Thư mục app/translation tương ứng với đường dẫn url/translation
        </a>
      </div>
    </main>
  );
}
