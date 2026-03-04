import os

# --- НАСТРОЙКИ ---
# Укажи здесь путь к твоей папке online-store.
# Точка '.' означает текущую директорию, если скрипт лежит прямо в папке проекта.
PROJECT_PATH = '.'
OUTPUT_FILE = 'angular_context.txt'

# Игнорируем тяжелые и системные папки
IGNORE_DIRS = {'.git', 'node_modules', '.angular', 'dist', 'assets'}
# Читаем только файлы с кодом
ALLOWED_EXTENSIONS = {'.ts', '.html', '.css', '.scss', '.json'}


def generate_context():
  with open(OUTPUT_FILE, 'w', encoding='utf-8') as out_file:
    out_file.write("=== СТРУКТУРА ПРОЕКТА ===\n\n")

    # 1. Сначала генерируем дерево файлов для понимания архитектуры
    for root, dirs, files in os.walk(PROJECT_PATH):
      # Модифицируем dirs на лету, чтобы os.walk не заходил в ненужные папки
      dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

      # Высчитываем уровень вложенности для красивых отступов
      level = root.replace(PROJECT_PATH, '').count(os.sep)
      indent = ' ' * 4 * level
      out_file.write(f"{indent}📂 {os.path.basename(root)}/\n")

      subindent = ' ' * 4 * (level + 1)
      for f in files:
        if any(f.endswith(ext) for ext in ALLOWED_EXTENSIONS):
          out_file.write(f"{subindent}📄 {f}\n")

    out_file.write("\n\n=== ИСХОДНЫЙ КОД ФАЙЛОВ ===\n\n")

    # 2. Теперь читаем содержимое каждого подходящего файла
    for root, dirs, files in os.walk(PROJECT_PATH):
      dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
      for file in files:
        if any(file.endswith(ext) for ext in ALLOWED_EXTENSIONS):
          file_path = os.path.join(root, file)
          # Получаем красивый относительный путь (например: src/app/app.component.ts)
          rel_path = os.path.relpath(file_path, PROJECT_PATH)

          out_file.write(f"--- НАЧАЛО ФАЙЛА: {rel_path} ---\n")
          try:
            with open(file_path, 'r', encoding='utf-8') as in_file:
              out_file.write(in_file.read() + "\n")
          except Exception as e:
            out_file.write(f"// Ошибка чтения файла: {e}\n")
          out_file.write(f"--- КОНЕЦ ФАЙЛА: {rel_path} ---\n\n")

  print(f"✅ Готово! Весь контекст собран в файл: {OUTPUT_FILE}")


if __name__ == '__main__':
  generate_context()
