#include <jni.h>
#include "RNPackUtilsOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::RNPackUtils::initialize(vm);
}
