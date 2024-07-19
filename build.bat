@echo off

clang++ --target=wasm32  -emit-llvm -c main.cpp -o main.o
wasm-ld main.o -o main.wasm -mwasm32 -allow-undefined --no-entry --export-all
