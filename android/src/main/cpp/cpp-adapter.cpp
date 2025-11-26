#include <jni.h>
#include "rnpack_utilsOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::rnpack_utils::initialize(vm);
}
