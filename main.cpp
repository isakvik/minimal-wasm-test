
extern "C" {

    void js_console(unsigned int v);

    static int globalVar = 0;
    
    int add(int a, int b) {
      globalVar++;
      return a + b;
    }
    
    int main() {
        js_console(add(5,6));
        return globalVar;
    }

}