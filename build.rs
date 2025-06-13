fn main() {
    cc::Build::new()
        .file("src/triangle/triangle.c")
        .include("src/triangle")
        .define("TRILIBRARY", None)
        .define("NO_TIMER", None)
        .define("REAL", Some("double"))
        .define("ANSI_DECLARATORS", None)
        .compile("triangle");
}
